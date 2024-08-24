import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { BoxIcon, TagIcon } from "lucide-react"; // Ajusta según cómo importes los íconos

export function App() {
  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="#" className="text-lg font-semibold">
          Acme Inc.
        </Link>
        <nav className="flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Productos</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid p-0">
                    <Link
                      to="/form"
                      className="flex items-center gap-2 rounded-md p-2 hover:bg-accent hover:text-accent-foreground"
                    >
                      <BoxIcon className="h-5 w-5" />
                      Inventario
                    </Link>

                    <Link
                      to="#"
                      className="flex items-center gap-2 rounded-md p-2 hover:bg-accent hover:text-accent-foreground"
                    >
                      <TagIcon className="h-5 w-5" />
                      Categorías
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
      </div>
    </header>
  );
}
