import PlanComparisonBoxTable from '@dev/widgets/subscriptionBenefits/planComparisonBoxTable';
import PlanComparisonTitle from '@dev/widgets/subscriptionBenefits/planComparisonTitle';

export default function PlanComparison() {
    return (
        <div className="w-[390px] bg-[#FEFEF6] h-[750px]">
            <PlanComparisonTitle />
            <PlanComparisonBoxTable />
        </div>
    );
}
