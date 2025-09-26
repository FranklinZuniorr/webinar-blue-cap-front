"use client"

import { ReactNode } from "react"
import { Toaster } from "react-hot-toast"

interface AdditionalProvidersProps {
    children: ReactNode
}

export const AdditionalProviders = ({ children }: AdditionalProvidersProps) => {
    <Toaster position="bottom-center" />
    return children
}