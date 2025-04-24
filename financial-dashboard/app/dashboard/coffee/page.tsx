import { Card, CardContent } from "@/components/ui/card"

export default function CoffeeDashboard() {
  return (
    <div className="space-y-6 max-w-full">
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="w-full aspect-[16/9] max-w-full">
            <iframe
              src="https://lookerstudio.google.com/embed/reporting/35677ded-dc2e-4913-bba7-6a7608879cd2/page/HVXgE"
              className="w-full h-full border-0"
              allowFullScreen
              title="Coffee Data Dashboard"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <p className="text-muted-foreground">
            The Coffee Data dashboard tracks the team's coffee consumption patterns and preferences. This information
            helps in managing supplies and understanding productivity correlations. Data is collected through our smart
            coffee machines and self-reporting by team members. Insights from this dashboard have led to optimized
            coffee station arrangements and improved team satisfaction during long work sessions.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
