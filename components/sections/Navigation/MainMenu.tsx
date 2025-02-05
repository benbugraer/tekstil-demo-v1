import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { KURUMSAL_ITEMS, HIZMETLER_ITEMS, NavItem } from "@/config/navigation";
import { memo } from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink = memo(({ href, children, className }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} legacyBehavior passHref>
      <NavigationMenuLink
        className={`${className} ${
          isActive ? "text-[#DC2626]" : "text-white hover:text-[#DC2626]"
        }`}
      >
        {children}
      </NavigationMenuLink>
    </Link>
  );
});

NavLink.displayName = "NavLink";

const DropdownContent = memo(
  ({ items, currentPath }: { items: NavItem[]; currentPath: string }) => (
    <ul className="grid w-[400px] gap-3 p-4">
      {items.map((item) => (
        <li key={item.href}>
          <Link href={item.href} legacyBehavior passHref>
            <NavigationMenuLink
              className={`block space-y-1 rounded-md p-3 leading-none no-underline hover:bg-slate-50 transition-colors ${
                currentPath === item.href
                  ? "text-[#DC2626] bg-red-50"
                  : "text-[#2A3855]"
              }`}
            >
              <div className="text-lg font-medium">{item.title}</div>
              {item.description && (
                <p className="text-base text-slate-600 line-clamp-2">
                  {item.description}
                </p>
              )}
            </NavigationMenuLink>
          </Link>
        </li>
      ))}
    </ul>
  )
);

DropdownContent.displayName = "DropdownContent";

export const MainMenu = memo(() => {
  const pathname = usePathname();

  return (
    <NavigationMenu className="hidden lg:block">
      <NavigationMenuList className="space-x-2">
        <NavigationMenuItem>
          <NavLink
            href="/"
            className="px-4 py-2 transition-colors duration-200 text-lg"
          >
            Anasayfa
          </NavLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={`transition-colors duration-200 text-lg font-normal ${
              pathname.includes("/kurumsal")
                ? "text-[#DC2626]"
                : "text-white hover:text-[#DC2626]"
            } data-[state=open]:text-[#DC2626]`}
          >
            Kurumsal
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <DropdownContent items={KURUMSAL_ITEMS} currentPath={pathname} />
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={`transition-colors duration-200 text-lg font-normal ${
              pathname.includes("/hizmetlerimiz")
                ? "text-[#DC2626]"
                : "text-white hover:text-[#DC2626]"
            } data-[state=open]:text-[#DC2626]`}
          >
            Hizmetlerimiz
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <DropdownContent items={HIZMETLER_ITEMS} currentPath={pathname} />
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavLink
            href="/surdurulebilirlik"
            className="px-4 py-2 transition-colors duration-200 text-lg"
          >
            Sürdürülebilirlik
          </NavLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavLink
            href="/iletisim"
            className="px-4 py-2 transition-colors duration-200 text-lg"
          >
            İletişim
          </NavLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
});

MainMenu.displayName = "MainMenu";
