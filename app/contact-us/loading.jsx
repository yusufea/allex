import { Skeleton } from "@/components/ui/skeleton"

export default function ContactUsLoading() {
    return (
        <div className="w-full min-h-screen bg-white">

            {/* Page Header */}
            <div className="w-full py-12 md:py-16 px-6 border-b border-slate-100">
                <div className="max-w-[1200px] mx-auto flex flex-col gap-3">
                    <Skeleton className="h-12 w-52" />
                    <Skeleton className="h-5 w-96 max-w-full" />
                    <Skeleton className="h-5 w-72 max-w-full" />
                </div>
            </div>

            {/* Content */}
            <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-12 md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

                    {/* Info Cards */}
                    <div className="lg:col-span-2 flex flex-col gap-5">
                        <Skeleton className="h-8 w-44" />
                        {Array.from({ length: 4 }).map((_, i) => (
                            <div key={i} className="flex items-start gap-4 p-5 border border-slate-100 rounded-xl">
                                <Skeleton className="w-10 h-10 rounded-full flex-shrink-0" />
                                <div className="flex flex-col gap-2 flex-1">
                                    <Skeleton className="h-3 w-20" />
                                    <Skeleton className="h-4 w-48 max-w-full" />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-3 flex flex-col gap-8">
                        <Skeleton className="h-8 w-52" />

                        {/* Name + Email */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div className="flex flex-col gap-2">
                                <Skeleton className="h-3 w-20" />
                                <Skeleton className="h-12 w-full rounded-lg" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Skeleton className="h-3 w-28" />
                                <Skeleton className="h-12 w-full rounded-lg" />
                            </div>
                        </div>

                        {/* Subject */}
                        <div className="flex flex-col gap-2">
                            <Skeleton className="h-3 w-16" />
                            <Skeleton className="h-12 w-full rounded-lg" />
                        </div>

                        {/* Message */}
                        <div className="flex flex-col gap-2">
                            <Skeleton className="h-3 w-20" />
                            <Skeleton className="h-36 w-full rounded-lg" />
                        </div>

                        {/* Button */}
                        <Skeleton className="h-12 w-40 rounded-full" />
                    </div>

                </div>
            </div>

        </div>
    )
}
