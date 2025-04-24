import { Card, CardContent } from "@/components/ui/card"

export default function FinancialDashboard() {
  return (
    <div className="space-y-6 max-w-full">
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="w-full aspect-[16/9] max-w-full">
            <iframe
              src="https://lookerstudio.google.com/embed/reporting/be24ec36-1d03-4812-b1d0-49a988edf370/page/HVXgE"
              className="w-full h-full border-0"
              allowFullScreen
              title="Financial Data Dashboard"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <p className="text-muted-foreground">
            This dashboard provides a comprehensive overview of Team 1710's financial status. The data includes current
            budget allocations, expenditure tracking, and funding sources. Regular updates ensure that all stakeholders
            have access to the most recent financial information, enabling informed decision-making for future team
            activities and investments.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
