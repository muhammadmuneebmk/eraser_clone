import React from 'react'

function Hero() {
    return (
        <section className="bg-black lg:grid lg:h-screen lg:place-content-center">
            <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
                <div className="mx-auto max-w-prose text-center">
                    <h1 className="text-4xl font-bold text-sky-300 sm:text-5xl">
                        AI
                        <strong className="text-white"> for technical design and documentation </strong>
                    </h1>

                    <p className="mt-4 text-base text-pretty text-slate-200 sm:text-lg/relaxed">
                        Deliver accurate, consistent designs faster
                    </p>

                    <div className="mt-4 flex justify-center gap-4 sm:mt-6">
                        <a
                            className="inline-block rounded border border-black bg-white px-5 py-3 font-medium text-black shadow-sm transition-colors hover:bg-slate-200"
                            href="#"
                        >
                            Learn More.
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero