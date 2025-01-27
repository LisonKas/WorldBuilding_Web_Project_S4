import ThemeCard from "./ThemeCard";

export default function ContentArea({onNavigate}) {
    return (
        <div>
            <ThemeCard onNavigate={onNavigate}/>
        </div>
    )
}