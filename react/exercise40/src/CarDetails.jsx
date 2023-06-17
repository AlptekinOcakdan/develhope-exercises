import { useRef, useEffect } from 'react';

const CarDetails = ({ initialData }) => {
    const formRef = useRef(null);

    useEffect(() => {
        if (formRef.current) {
            formRef.current.reset();
        }
    }, [initialData]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const model = formData.get('model');
        const year = formData.get('year');
        const color = formData.get('color');

        console.log('Model:', model);
        console.log('Year:', year);
        console.log('Color:', color);
    };

    return (
        <form ref={formRef} onSubmit={handleSubmit}>
            <label>
                Model:
                <input type="text" name="model" defaultValue={initialData.model} />
            </label>
            <br />
            <label>
                Year:
                <input type="text" name="year" defaultValue={initialData.year} />
            </label>
            <br />
            <label>
                Color:
                <input type="text" name="color" defaultValue={initialData.color} />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default CarDetails;
