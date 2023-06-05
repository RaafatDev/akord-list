/* eslint-disable @next/next/no-img-element */

export const HeroImage = () => {
    return (
        <section
            className="w-full mx-auto border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full overflow-hidden"
            style={{
                height: 200,
                width: 200,
            }}
        >
            <img //
                // fill
                src="/images/guitar.jpg"
                alt="guitar image"
                // priority={true}
            />
        </section>
    );
};
