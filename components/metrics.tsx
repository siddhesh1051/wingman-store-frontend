import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ChatIcon from "@/assets/ChatTeardrop.svg";
import TagIcon from "@/assets/Tag.svg";
import CheckIcon from "@/assets/CheckFat.svg";
import CoinsIcon from "@/assets/Coins.svg";
import CoinIcon from "@/assets/Coin.svg";
import PiggyBankIcon from "@/assets/PiggyBank.svg";
import Image from "next/image";
import TrendUpIcon from "@/assets/TrendUp.svg";
import TrendDownIcon from "@/assets/TrendDown.svg";

interface Metric {
  title: string;
  value: string | number;
  change: number;
  changeType: "increase" | "decrease";
  icon: string;
}

const metrics: Metric[] = [
  {
    title: "Consultations",
    value: "24",
    change: 15,
    changeType: "increase",
    icon: ChatIcon,
  },
  {
    title: "Orders Placed",
    value: "12",
    change: 15,
    changeType: "decrease",
    icon: TagIcon,
  },
  {
    title: "Conversion",
    value: "50%",
    change: 15,
    changeType: "decrease",
    icon: CheckIcon,
  },
  {
    title: "Total Sales Value",
    value: "$2,400",
    change: 15,
    changeType: "increase",
    icon: CoinsIcon,
  },
  {
    title: "Avg Order Value",
    value: "$240",
    change: 15,
    changeType: "increase",
    icon: CoinIcon,
  },
  {
    title: "Commission Paid",
    value: "$240",
    change: 15,
    changeType: "increase",
    icon: PiggyBankIcon,
  },
];

export function Metrics() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 py-3">
      {metrics.map((metric) => (
        <Card
          key={metric.title}
          className="rounded-[20px] shadow-[0px_0px_0px_1px_#0000000F]"
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Image
                src={metric.icon}
                alt={metric.title}
                width={12}
                height={12}
              />
              <span className="font-semibold text-xs uppercase tracking-widest text-labelText">
                {metric.title}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="gap-2 flex flex-col">
            <div className="text-3xl font-medium">{metric.value}</div>
            <p
              className={cn(
                "flex items-center text-xs",
                metric.changeType === "increase"
                  ? "text-greenText"
                  : "text-redText"
              )}
            >
              {metric.changeType === "increase" ? (
                <Image
                  src={TrendUpIcon}
                  alt="Trend Up"
                  className="mr-1 h-4 w-4"
                />
              ) : (
                <Image
                  src={TrendDownIcon}
                  alt="Trend Down"
                  className="mr-1 h-4 w-4"
                />
              )}
              {metric.change}%{" "}
              <span className="text-labelText ml-1">{metric.changeType}</span>
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
