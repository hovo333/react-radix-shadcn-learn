import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {Panel} from "@/components/Panel.tsx";
import {Button} from "@/components/ui/button.tsx";

export function UserCard() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Пользователь</CardTitle>
            </CardHeader>

            <CardContent>
                Иван Иванов
            </CardContent>

            <Panel>
                <h2>Мои счета</h2>

                <Button>Открыть счёт</Button>
            </Panel>
        </Card>
    );
}