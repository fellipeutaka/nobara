import { Icons } from "~/components/icons";
import { Button } from "~/components/ui/button";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import { docsConfig } from "~/config/docs";
import { siteConfig } from "~/config/site";

export function MobileNav() {
	const mergedMainNavItems = docsConfig.mainNav?.filter(
		(item, index, self) =>
			index ===
			self.findIndex((t) => t.href === item.href && t.title === item.title),
	);

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="ghost" size="icon" className="md:hidden">
					<Icons.Hamburger className="size-4" />
					<span className="sr-only">Toggle Menu</span>
				</Button>
			</SheetTrigger>
			<SheetContent side="right" className="pr-0">
				<a href="/" className="flex items-center max-w-min">
					<Icons.Logo className="mr-2 size-8" />
					<span className="font-bold">{siteConfig.name}</span>
				</a>
				<ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-10">
					<div className="mt-2 mb-20">
						<div className="flex flex-col space-y-3">
							{mergedMainNavItems?.map(
								(item) =>
									item.href && (
										<a
											key={item.href}
											href={item.href}
											className="text-muted-foreground"
										>
											{item.title}
										</a>
									),
							)}
						</div>

						<div className="flex flex-col space-y-2">
							{docsConfig.sidebarNav.map((item) => {
								const activeItems = item?.items?.filter(
									(subItem) => !subItem.disabled,
								);

								return (
									<div
										key={item.title}
										className="flex flex-col space-y-3 pt-6"
									>
										<h4 className="font-medium">{item.title}</h4>
										{activeItems.map((subItem) => (
											<a href={subItem.href} className="text-muted-foreground">
												{subItem.title}
											</a>
										))}
									</div>
								);
							})}
						</div>
					</div>
				</ScrollArea>
			</SheetContent>
		</Sheet>
	);
}
