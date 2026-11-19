import FancyBorder from '../ex1/FancyBorder';

export default function Dialog({ title, message, children }) {
    return (
        <FancyBorder color="blue">
            <h2 className="fancy-border__title">{title}</h2>
            <p className="fancy-border__message">{message}</p>
            {children}
        </FancyBorder>
    );
}
