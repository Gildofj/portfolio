"use client";

import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
} from "@/shared/ui/Dropdown";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { AnimatePresence, m } from "motion/react";
import { useLocale } from "next-intl";
import { useMemo, useState, useSyncExternalStore } from "react";
import Flag from "react-flagkit";

const subscribe = () => () => {};

export function LocaleDropdownMenu() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isMounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  const selectedCountry = useMemo(() => locale.split("-")[1], [locale]);

  return isMounted ? (
    <Dropdown open={open} onOpenChange={setOpen} modal={false}>
      <DropdownTrigger asChild>
        <m.div 
          className="group relative z-10 flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-white/50 dark:bg-zinc-900/50 shadow-neu-flat transition-all outline-none"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="h-full w-full p-0.5 transition-transform duration-500 group-hover:scale-110 [&>img]:h-full [&>img]:w-full [&>img]:rounded-lg [&>img]:object-cover">
            <Flag country={selectedCountry} />
          </div>
        </m.div>
      </DropdownTrigger>

      <AnimatePresence>
        {open && (
          <DropdownContent
            forceMountPortal
            hideArrow
            sideOffset={12}
            className="flex flex-col items-center justify-center gap-2 overflow-visible"
            motionProps={{
              initial: { opacity: 0, y: -15, scale: 0.8, height: 'auto' },
              animate: { opacity: 1, y: 0, scale: 1, height: 'auto' },
              exit: { opacity: 0, y: -15, scale: 0.8, height: 'auto' },
              transition: { type: "spring", stiffness: 400, damping: 25 }
            }}
            style={{ 
              background: 'transparent', 
              boxShadow: 'none', 
              border: 'none',
              backdropFilter: 'none',
              overflow: 'visible' 
            }}
          >
            {routing.locales
              .filter((locale) => {
                const country = locale.split("-")[1];
                return country !== selectedCountry;
              })
              .map((locale, i) => {
                const country = locale.split("-")[1];
                return (
                  <DropdownItem
                    asChild
                    key={locale}
                    onSelect={() => router.push(pathname, { locale })}
                  >
                    <m.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-white/80 dark:bg-zinc-900/80 shadow-neu-flat transition-all outline-none no-scrollbar"
                      style={{ overflow: 'hidden' }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <div className="h-full w-full p-0.5 [&>img]:h-full [&>img]:w-full [&>img]:rounded-lg [&>img]:object-cover">
                        <Flag country={country} role="button" />
                      </div>
                    </m.div>
                  </DropdownItem>
                );
              })}
          </DropdownContent>
        )}
      </AnimatePresence>
    </Dropdown>
  ) : (
    <div className="h-10 w-10" />
  );
}
