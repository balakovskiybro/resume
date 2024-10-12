import Button from "./Button/Button"

export default function TabsSection({ active, onChange }) {
    return (
        <section>
            <Button isActive={active === 'auto'} onClick={() => onChange('auto')}>Работа №1</Button>
            <Button isActive={active === 'main'} onClick={() => onChange('main')}>Работа №2</Button>
            <Button isActive={active === 'back'} onClick={() => onChange('back')}>Работа №3</Button>
        </section>
    )
}