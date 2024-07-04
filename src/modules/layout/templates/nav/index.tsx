import { Suspense } from "react"
import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"

import {
  FaTwitter,
  FaYoutube,
  FaShoppingCart,
  FaHeart,
  FaUser,
} from "react-icons/fa"
import { PiInstagramLogoLight } from "react-icons/pi"
import { FaSquareFacebook } from "react-icons/fa6"

export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 bg-white">
      {/* Top Section */}
      <div className="py-2 px-4 w-full max-w-7xl mx-auto flex flex-row items-center justify-between border-b border-ui-border-base pb-4">
        <div className="flex flex-row items-center space-x-4">
          <FaSquareFacebook className="text-xl text-lightGray" />
          <FaTwitter className="text-xl text-lightGray" />
          <FaYoutube className="text-xl text-lightGray" />
          <PiInstagramLogoLight className="text-xl text-lightGray" />
        </div>
        <div className="flex-1 basis-0 h-full flex items-center justify-end">
          <SideMenu regions={regions} />
        </div>
      </div>
      {/* Bottom Section */}
      <div className="py-2 px-4 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div className="flex-1 flex items-center justify-center md:justify-start">
          <LocalizedClientLink
            href="/"
            className="font-bold text-lg md:text-2xl hover:text-ui-fg-base uppercase"
            data-testid="nav-store-link"
          >
            STORE
          </LocalizedClientLink>

          <input className="ml-8 border" placeholder="Search"></input>
        </div>
        <div className="flex items-center space-x-6">
          {process.env.FEATURE_SEARCH_ENABLED && (
            <div className="hidden md:block">
              <LocalizedClientLink
                href="/search"
                className="hover:text-ui-fg-base"
                data-testid="nav-search-link"
              >
                Search
              </LocalizedClientLink>
            </div>
          )}
          <Suspense
            fallback={
              <div className="flex items-center justify-center w-12 h-12 border rounded-full border-lightGrayishBlue">
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-2"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  <FaShoppingCart className="text-xl text-lightGray" />
                </LocalizedClientLink>
              </div>
            }
          >
            <CartButton />
          </Suspense>
          <div className="w-12 h-12 flex items-center justify-center border rounded-full border-lightGrayishBlue">
            <FaHeart className="text-xl text-lightGray" />
          </div>
          <div className="w-12 h-12 flex items-center justify-center border rounded-full border-lightGrayishBlue">
            <FaUser className="text-xl text-lightGray" />
          </div>
          <LocalizedClientLink
            className="hover:text-ui-fg-base"
            href="/account"
            data-testid="nav-account-link"
          >
            Account
          </LocalizedClientLink>
        </div>
      </div>
    </div>
  )
}
