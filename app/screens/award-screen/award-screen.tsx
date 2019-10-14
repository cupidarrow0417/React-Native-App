import * as React from "react"
import { observer } from "mobx-react"
import { ViewStyle } from "react-native"
import { Text } from "../../components/text"
import { Screen } from "../../components/screen"
// import { useStores } from "../../models/root-store"
import { color } from "../../theme"
import { NavigationScreenProps } from "react-navigation"

export interface AwardScreenProps extends NavigationScreenProps<{}> {
}

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
}

export const AwardScreen: React.FunctionComponent<AwardScreenProps> = observer((props) => {
  // const { someStore } = useStores()
  return (
    <Screen style={ROOT} preset="scroll">
      <Text preset="header" tx="awardScreen.header" />
    </Screen>
  )
})
