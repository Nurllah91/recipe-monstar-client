
const SectionHeading = ({title, children}) => {
    return (
        <div>
            {title && <h3 className="text-center text-3xl font-bold text-white">{title}</h3>}
            {children&& <p className="mb-5 text-slate-300 text-center w-3/4 mx-auto">{children}</p>}
        </div>
    );
};

export default SectionHeading;