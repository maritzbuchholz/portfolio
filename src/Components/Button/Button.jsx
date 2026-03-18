import "./Button.scss";
import { Link } from "react-router-dom";

const EnvelopeIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="button__icon-svg">
        <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" />
        <rect x="3" y="5" width="18" height="14" rx="2" strokeLinecap="round" />
    </svg>
);

const ArrowDownIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="button__icon-svg">
        <path d="M12 5V19" />
        <path d="M19 12L12 19L5 12" />
    </svg>
);

const Button = ({
    type = "button",
    variant = "primary", //primary, secondary
    disabled = false,
    isLink = false,
    to,
    className = "",
    icon,
    iconRight,
    children,
    ...props
}) => {
    let combinedClassName = "button button--" + variant;
    if (className) combinedClassName += " " + className;

    const renderIcon = (iconName) => {
        if (iconName === "envelope") return <EnvelopeIcon />;
        if (iconName === "arrow-down") return <ArrowDownIcon />;
        return iconName;
    };

    const content = (
        <>
            {icon && <span className="button__icon" style={{ display: 'flex', alignItems: 'center' }}>{renderIcon(icon)}</span>}
            <span className="button__text">{children}</span>
            {iconRight && <span className="button__icon" style={{ display: 'flex', alignItems: 'center' }}>{renderIcon(iconRight)}</span>}
        </>
    );

    if (isLink) {
        return (
            <a href={to} className={combinedClassName} {...props}>
                {content}
            </a>
        );
    }

    return (
        <button
            type={type}
            className={combinedClassName}
            disabled={disabled}
            {...props}
        >
            {content}
        </button>
    );
};

export default Button;
