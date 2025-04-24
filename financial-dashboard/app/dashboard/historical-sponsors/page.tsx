import { Card, CardContent } from "@/components/ui/card"

export default function HistoricalSponsorsDashboard() {
  return (
    <div className="space-y-6 max-w-full">
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="w-full aspect-[16/9] max-w-full">
            <iframe
              src="https://lookerstudio.google.com/embed/reporting/5fe4ce9b-cf4e-40e2-8e4c-5c5df2743112/page/HVXgE"
              className="w-full h-full border-0"
              allowFullScreen
              title="Historical Sponsor Data Dashboard"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <p className="text-muted-foreground">
            The Historical Sponsor Data dashboard provides a comprehensive view of Team 1710's sponsorship trends over
            time. This includes past partners, contribution patterns, and the impact of different outreach strategies.
            By analyzing this historical data, the team can identify successful approaches and optimize future
            sponsorship efforts. The dashboard also helps in recognizing long-term supporters who have been instrumental
            in the team's growth and success.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
