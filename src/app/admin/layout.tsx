import Sidebar from "@/components/sidebar";

export default function AdminLayout({
                                      children, // will be a page or nested layout
                                    }: {
  children: React.ReactNode
}) {
  return (
    <section>
      <nav></nav>
      <Sidebar/>
      {children}
    </section>
  )
}