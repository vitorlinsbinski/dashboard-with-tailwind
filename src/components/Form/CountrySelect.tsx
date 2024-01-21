"use client";

import { useCallback, useMemo, useState } from "react";
import * as Select from "@/components/Form/Select";
import { countries } from "@/utils/countries";
import Flag from "react-world-flags";

type CountryCode = keyof typeof countries;

export function CountrySelect() {
  const [value, setValue] = useState<CountryCode | undefined>(undefined);

  const handleCountrySelected = useCallback((selectedValue: string) => {
    setValue(selectedValue as CountryCode);
  }, []);

  const memoizedCountries = useMemo(() => {
    return Object.entries(countries).map(([code, title]) => {
      return (
        <Select.Item key={code} value={code}>
          <Select.ItemPrefix>
            <Flag
              className="h-5 w-5 rounded-full object-cover object-center"
              code={code}
            />
          </Select.ItemPrefix>

          <Select.ItemText>{title}</Select.ItemText>
        </Select.Item>
      );
    });
  }, [countries]);

  return (
    <Select.Root
      name="country"
      value={value}
      onValueChange={handleCountrySelected}
    >
      <Select.Trigger>
        <Select.Value placeholder="Select your country...">
          {value && (
            <>
              <Flag
                className="h-5 w-5 rounded-full object-cover object-center"
                code={value}
              />

              <span className="text-black dark:text-zinc-100">
                {countries[value]}
              </span>
            </>
          )}
        </Select.Value>
      </Select.Trigger>

      <Select.Content>{memoizedCountries}</Select.Content>
    </Select.Root>
  );
}
