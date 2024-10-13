import dateFormat from 'dateformat'

const LoadComments = ({ comments }) => {
    const previewComments = comments.map((c) => {
        return (<div key={c.id}>
            <b>Commenter : {c.author}</b>
            <p>{c.comment}</p>
            <p>{dateFormat(c.date, "dddd, mmmm dS, yyyy")}</p>
            <hr />
        </div>)
    })
    return (
        <div>
            {previewComments}
        </div>
    );
};

export default LoadComments;