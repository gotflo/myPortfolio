import "./portfolioList.scss";

export default function PortfolioList({ id, title, activeP, setSelected }) {
    return (
        <div className="port">
            <li className={activeP ? "portfolioList active" : "portfolioList"}
                onClick={() => setSelected(id)}
            >
                {title}
            </li>
        </div>
    )
}
