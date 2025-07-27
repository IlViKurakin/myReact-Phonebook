function Filter({value, onChange}) {

    // Рендеринг контента субкомпонента
    return (
        <label>
            Finf contact by name:
            <input
                type="text"
                value={value}
                onChange={onChange}
            />
        </label>
    );
}

export default Filter;