import './FancyBorder.css';

export default function FancyBorder({ color = 'blue', children }) {
    return (
        <div className={`fancy-border fancy-border--${color}`}>
            {children}
        </div>
    );
}
