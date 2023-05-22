import './index.css'

const BlogItem = props => {
  const {blogItemDetails} = props
  const {title, description, publishedDate} = blogItemDetails

  return (
    <li className="list-item-container">
      <div className="blog-item-container">
        <h1 className="blog-title">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
      <hr className="separator" />
    </li>
  )
}

export default BlogItem
