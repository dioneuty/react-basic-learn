import {useState} from 'react';

function Header({title}) {
    return <h1>{title ? title : 'Default Title'}</h1>;
}

export default function HomePage() {
    const names = ['홍길동', '이순신', '장보고'];

    const [likes, setLikes] = useState(0);

    function handleClick() {
        setLikes(likes + 1);
    }

    return (
        <div>                        
            <Header title="Hello World" /> {/* Header 컴포넌트를 중첩함 */}
            <Header title="Hello React" />
            <Header />
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
            <button onClick={handleClick}>Like ({likes})</button>
        </div>
    );
}