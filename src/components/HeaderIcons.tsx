import React from 'react'
import Image from "next/image";

const HeaderIcons = () => {
  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <Image
        src="/images/wishlist.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
      />

<Image
        src="/images/cart.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
      />


      </div>
  )
}

export default HeaderIcons