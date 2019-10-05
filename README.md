# todoApp
react-native로 투두리스트 만들기

## ... operator

    return {...newState} => newState의 변수를 모두 넘긴다는 의미
    {
        loadedToDos : loadedToDos,
        newToDo : newToDo,
        toDos : toDos
    } 이런식으로 전달하여 setState를 통해 값을 변경시킨다.
1. map.(
        todo =>{
            return ~~~~~~;
        }
    )

2.  map.(
        todo => (~~~~~~)
    )

1번과 2번이 같은 의미

## 객체의 value를 통해 삭제하는 법
    delete object[value]