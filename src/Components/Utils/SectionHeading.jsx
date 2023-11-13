
const SectionHeading = ({title, children}) => {
    return (
        <div>
            {title && <h3 className="text-center text-3xl font-bold text-white">{title}</h3>}
            <div className="w-32 min-h-[4px] bg-orange-500 mx-auto my-2"></div>
            {children&& <p className="mb-5 text-slate-300 text-center w-3/4 mx-auto">{children}</p>}
        </div>
    );
};

export default SectionHeading;