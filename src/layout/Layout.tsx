import Header from '../components/header';
import {ReactNode} from 'react';
import Footer from '../components/footer';

type Props = {
    children: ReactNode;
    homepage?: boolean;
}
export const Layout = ({ children, homepage }: Props) => {
    return (
        <div>
            <Header homepage={!!homepage} />
            <main>
                {children}
            </main>
          <Footer homepage={homepage} />
        </div>
    );
}