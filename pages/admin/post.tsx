import {GetServerSideProps} from "next";
//
type Props = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

const TestPage = (props: Props) => {
    return (
        <>
            <h1>Test Page</h1>
            <h2>
                {props.title}
            </h2>
            <p>{props.body}</p>
        </>
    );
};

export default TestPage;

export const getServerSideProps: GetServerSideProps = async (context) => {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const persons = await response.json();

    const props: { id: number, title: string, body: string } = {
        id: persons[0].id,
        title: persons[0].title,
        body: persons[0].body,
    };

    return {
        props: props,
    }
}