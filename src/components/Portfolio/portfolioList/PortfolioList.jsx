import "./portfolioList.scss";

export default function PortfolioList({ id, title, activeP, setSelected }) {
    return (
        <li className={activeP ? "portfolioList active" : "portfolioList"}
            onClick={() => setSelected(id)}
        >
            {title}
        </li>
    )
}
