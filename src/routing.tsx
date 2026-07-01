import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type AnchorHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from 'react';

type LocationState = {
  pathname: string;
  search: string;
  hash: string;
};

type RouterContextValue = {
  location: LocationState;
  navigate: (to: string) => void;
};

type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  to: string;
};

type NavLinkProps = Omit<LinkProps, 'className'> & {
  className?: string | ((state: { isActive: boolean }) => string);
  end?: boolean;
};

const RouterContext = createContext<RouterContextValue | null>(null);

const readLocation = (): LocationState => ({
  pathname: window.location.pathname || '/',
  search: window.location.search,
  hash: window.location.hash,
});

const normalizePath = (path: string) => {
  const withoutTrailingSlash = path.length > 1 ? path.replace(/\/+$/, '') : path;
  return withoutTrailingSlash || '/';
};

const toHref = (to: string) => (to.startsWith('/') ? to : `/${to}`);

const isModifiedClick = (event: MouseEvent<HTMLAnchorElement>) =>
  event.metaKey || event.altKey || event.ctrlKey || event.shiftKey;

const useRouter = () => {
  const context = useContext(RouterContext);

  if (!context) {
    throw new Error('Router components must be used inside RouterProvider.');
  }

  return context;
};

export const RouterProvider = ({ children }: { children: ReactNode }) => {
  const [location, setLocation] = useState(readLocation);

  useEffect(() => {
    const handlePopState = () => setLocation(readLocation());
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = useCallback((to: string) => {
    const nextHref = toHref(to);
    const currentHref = `${window.location.pathname}${window.location.search}${window.location.hash}`;

    if (nextHref !== currentHref) {
      window.history.pushState({}, '', nextHref);
      setLocation(readLocation());
    }
  }, []);

  const value = useMemo(() => ({ location, navigate }), [location, navigate]);

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
};

export const useLocation = () => useRouter().location;

export const Link = ({ to, onClick, target, ...props }: LinkProps) => {
  const { navigate } = useRouter();
  const href = toHref(to);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      isModifiedClick(event) ||
      (target && target !== '_self')
    ) {
      return;
    }

    event.preventDefault();
    navigate(href);
  };

  return <a href={href} target={target} onClick={handleClick} {...props} />;
};

export const NavLink = ({ to, className, end, ...props }: NavLinkProps) => {
  const { location } = useRouter();
  const href = normalizePath(toHref(to));
  const currentPath = normalizePath(location.pathname);
  const isActive = end || href === '/' ? currentPath === href : currentPath === href || currentPath.startsWith(`${href}/`);
  const resolvedClassName = typeof className === 'function' ? className({ isActive }) : className;

  return <Link to={href} className={resolvedClassName} {...props} />;
};
