import Theme from './Theme.jsx'
import Button from './Button.jsx'

export default function ThemeCard({onNavigate}) {
    return (
        <div>
            <Theme />
            <Button onNavigate={onNavigate} />
        </div>
    )
}