import { LinearProgress, CircleProgress, type CircleProgressSize } from "@/components/progress";
import { ShowcasePage } from "../components/ShowcasePage";
import { ComponentPlayground } from "../components/ComponentPlayground";

export function ProgressShowcase() {
  return (
    <ShowcasePage
      name="Progress"
      description="Indicators for tracking deterministic completion — circular (three sizes) and linear bar."
    >
      {/* Circle Progress */}
      <ComponentPlayground
        title="Circle Progress"
        controls={[
          {
            type: "select",
            key: "size",
            label: "Size",
            options: [
              { label: "lg (128 px)", value: "lg" },
              { label: "md (48 px)",  value: "md" },
              { label: "sm (24 px)",  value: "sm" },
            ],
            defaultValue: "lg",
          },
          {
            type: "select",
            key: "value",
            label: "Value",
            options: [
              { label: "0%",   value: "0"   },
              { label: "10%",  value: "10"  },
              { label: "25%",  value: "25"  },
              { label: "50%",  value: "50"  },
              { label: "75%",  value: "75"  },
              { label: "80%",  value: "80"  },
              { label: "100%", value: "100" },
            ],
            defaultValue: "50",
          },
        ]}
        render={({ size, value }) => {
          const s = size as CircleProgressSize;
          const v = Number(value);
          return {
            preview: <CircleProgress size={s} value={v} />,
            code: `<CircleProgress size="${s}" value={${v}} />`,
          };
        }}
      />

      {/* Linear Progress */}
      <ComponentPlayground
        title="Linear Progress"
        controls={[
          {
            type: "select",
            key: "value",
            label: "Value",
            options: [
              { label: "0%",   value: "0"   },
              { label: "10%",  value: "10"  },
              { label: "30%",  value: "30"  },
              { label: "50%",  value: "50"  },
              { label: "80%",  value: "80"  },
              { label: "100%", value: "100" },
            ],
            defaultValue: "50",
          },
        ]}
        render={({ value }) => {
          const v = Number(value);
          return {
            preview: (
              <div className="w-[320px]">
                <LinearProgress value={v} />
              </div>
            ),
            code: `<LinearProgress value={${v}} />`,
          };
        }}
      />
    </ShowcasePage>
  );
}
