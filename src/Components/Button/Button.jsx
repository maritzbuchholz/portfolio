import "./Button.scss";
import mailIcon from '../../assets/mail.svg';
import downIcon from '../../assets/down.svg';

const EnvelopeIcon = () => (
    <img src={mailIcon} alt="envelope icon" className="button__icon-svg" />
);

const ArrowDownIcon = () => (
    <img src={downIcon} alt="arrow down icon" className="button__icon-svg" />
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
