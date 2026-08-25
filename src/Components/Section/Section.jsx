import './Section.scss';

/**
 * Shared ledger-folio chrome. Wraps every section so the ruled
 * header treatment stays identical across the page.
 *
 * <Section id="stack" folio="02" label="Accounts — 04" title={<>Tech <em>stack</em></>}>
 */
const Section = ({ id, folio, label, title, children }) => {
    return (
        <section className="sec" id={id}>
            <div className="sec__inner">
                <div className="sec__folio">
                    <span className="meta">Folio {folio}</span>
                    <span className="meta">{label}</span>
                </div>
                <h2 className="sec__title">{title}</h2>
                {children}
            </div>
        </section>
    );
};

export default Section;
