
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Image,
  NavbarMenu,
  NavbarMenuItem
} from "@nextui-org/react"
import { menu } from "@/config/menu"
import { Menu, MenuGroup } from "@/types/menu"
import { IoIosArrowDown } from "react-icons/io"
import { useState } from "react"
import React from "react"

export const Navbar = () => { 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleClickMenu = (item: Menu) => {
    if (item.action === "link") {
      window.location.href = item.url as string
    } else if (item.action === "scroll") {
      const footer = document.getElementById("footer");
      if (footer) {
        footer.scrollIntoView({ behavior: "smooth" })
      }
    }
  }
  
	return (
		<NextUINavbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="max-w-screen-xl"
    >
      <NavbarBrand>
        <Link href="/">
          <Image
            width={200}
            alt="NextUI hero Image"
            src="/rabbitlife-logo.png"
          />
        </Link>
      </NavbarBrand>
      <NavbarContent className="md:hidden xs:flex" justify="end">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>
      <NavbarContent className="hidden md:flex gap-4" justify="center">
        { (menu as any).map((item: Menu, index: number) => {
          return (
            <React.Fragment key={`navbar-fragment-${item.text}-${index}`}>
              { item.action === "dropdown" &&
                <Dropdown>
                  <NavbarItem>
                    <DropdownTrigger>
                      <Button
                        disableRipple
                        className="p-0 bg-transparent data-[hover=true]:bg-transparent text-base"
                        endContent={<IoIosArrowDown />}
                        radius="sm"
                        variant="light"
                      >
                        {item.text}
                      </Button>
                    </DropdownTrigger>
                  </NavbarItem>
                  <DropdownMenu
                    aria-label="features"
                    className="w-[200px]"
                    itemClasses={{
                      base: "gap-4",
                    }}
                  >
                    { (item.groups as any).map((groupItem: MenuGroup, groupIndex: number) => {
                      return (
                        <DropdownItem key={`dropdown-${groupItem.text}-${groupIndex}`}>
                          <Link
                            href={groupItem.url}
                            color="foreground"
                            className="font-medium cursor-pointer"
                          >
                            {groupItem.text}
                          </Link>
                        </DropdownItem>
                      )
                    })}
                  </DropdownMenu>
                </Dropdown>
              }
              { ["link", "scroll"].includes(item.action) &&
                  <NavbarItem key={`nav-item-link-${item.text}-${index}`}>
                    <Link
                      onClick={() => handleClickMenu(item) }
                      color="foreground"
                      className="font-medium cursor-pointer" 
                    >
                      {item.text}
                    </Link>
                  </NavbarItem>
              }
            </React.Fragment>
          )
        })}
      </NavbarContent>
      <NavbarContent className="hidden md:flex gap-4" justify="end"></NavbarContent>
      <NavbarMenu className="p-10">
        { (menu as any).map((item: Menu, index : number) => {
          return (
            <NavbarMenuItem key={`nav-menu-${item.text}-${index}`}>
              { item.groups
                  ? (item.groups as any).map((groupItem: Menu, groupIndex : number) => {
                        return (
                          <Link
                            key={`nav-menu-link-${groupItem.text}-${groupIndex}`}
                            className="w-full py-1.5"
                            size="lg"
                            onClick={() => handleClickMenu(groupItem) }
                            color="foreground"
                          >
                            {groupItem.text}
                          </Link>
                        )
                    })
                  : <Link
                      className="w-full"
                      size="lg"
                      onClick={() => handleClickMenu(item) }
                      color="foreground"
                    >
                      {item.text}
                    </Link>
              }
            </NavbarMenuItem>
          )
        })}
      </NavbarMenu>
    </NextUINavbar>
  );
}
