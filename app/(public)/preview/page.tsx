// preview page for newly created UI components
import Skeleton from "@/components/Skeleton"
import Avatar from "@/components/Avatar"

export default function PreviewPage() {
  return (
    <div className="page-content">
      <h2>Preview</h2>
      <section>
        <h3>Skeleton</h3>
        <div className="preview-grid">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      </section>
      <section>
        <h3>Avatar</h3>
        <div className="preview-grid">
          <Avatar name="alice" />
          <Avatar name="PocketHeist" />
          <Avatar name="JohnDoe" />
          <Avatar name="JohnDoeOleg" />
        </div>
      </section>
    </div>
  )
}
