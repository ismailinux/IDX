interface PlaceholderContentProps {
  pageName: string
}

export default function PlaceholderContent({ pageName }: PlaceholderContentProps) {
  return (
    <div className="flex items-center justify-center h-64">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          {pageName.charAt(0).toUpperCase() + pageName.slice(1)} Page
        </h2>
        <p className="text-gray-600">Content for {pageName} will be implemented here.</p>
      </div>
    </div>
  )
}
