import React from "react"

const Wrapper = ({ children, className }: { children: React.ReactNode, className?: string}) => {
  return (
    <div className={`w-full max-w-[1440px] mx-auto relative ${className || ""}`}>
      { children }
    </div>
  )
}

export default Wrapper