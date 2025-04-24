import { Card, CardContent } from "@/components/ui/card"

export default function SponsorsDashboard() {
  return (
    <div className="space-y-6 max-w-full">
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="w-full aspect-[16/9] max-w-full">
            <iframe
              src="https://lookerstudio.google.com/embed/reporting/7b7d047d-a621-45b9-920f-b5766655c53a/page/HVXgE"
              className="w-full h-full border-0"
              allowFullScreen
              title="Current Sponsor Data Dashboard"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <p className="text-muted-foreground">
            This dashboard displays information about Team 1710's current sponsors and partnerships. It includes
            contribution levels, engagement metrics, and upcoming renewal dates. The visualization helps in maintaining
            strong relationships with our supporters and identifying opportunities for deeper collaboration. Regular
            updates ensure the team can properly acknowledge and engage with all sponsors throughout the season.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
