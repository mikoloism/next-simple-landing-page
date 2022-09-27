import { Group } from '@/components/atoms';
import { Header } from '@/components/molecules/Header';
import { FooterNavigation } from './Navigation';

type Props = {
    title: string;
    navigation: Array<Record<any, any>>;
};

export function NavigationContainer({ navigation, title }: Props) {
    return (
        <Group
            gapx="4"
            className="w-[20%] h-full">
            <Header
                level="h3"
                title={title}
                className="flex flex-wrap flex-col place-content-start place-items-start w-full"
            />
            <FooterNavigation items={navigation} />
        </Group>
    );
}
