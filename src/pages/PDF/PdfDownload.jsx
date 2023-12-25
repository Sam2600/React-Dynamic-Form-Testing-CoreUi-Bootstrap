/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import {
  Document,
  PDFViewer,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  overAllStyle: {
    fontSize: 10,
  },
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    borderWidth: 1,
  },
  centeredText: {
    paddingHorizontal: 5,
    paddingVertical: 4,
  },
  header: {
    fontSize: 15,
    fontWeight: "bold",
    paddingVertical: 6,
    textAlign: "center",
    borderBottomWidth: 1,
  },

  small_header: {
    fontSize: 13,
    paddingVertical: 2,
    width: "25%",
    borderRightWidth: 1,
  },

  borderBottom: {
    borderBottomWidth: 1,
  },
  flex_border_bottom: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
  },
  flex_col_border_bottom: {
    display: "flex",
    flexDirection: "column",
    borderBottomWidth: 1,
  },
  col1_border_right: {
    width: "8.333333333333333%",
    borderRightWidth: 1,
  },
  col2_border_right: {
    width: "16.666666666666667%",
    borderRightWidth: 1,
  },
  col3_border_right: {
    width: "25%",
    borderRightWidth: 1,
  },
  col3_no_border_right: {
    width: "25%", // 3 out of 12 grid columns
  },
  col4_border_right: {
    width: "33.33333333333333%",
    borderRightWidth: 1,
  },
  col6_border_right: {
    width: "50%",
    borderRightWidth: 1,
  },
  col6: {
    display: "flex",
    flexDirection: "row",
    flex: 0.5,
  },

  // Sixth Part PDF
  sixth: {
    display: "flex",
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "space-between",
  },

  col5_borderLT: {
    width: "41.666666666666664%", // 5 columns out of 12
    borderTopWidth: 1,
    borderRightWidth: 1,
  },

  col6_borderLT: {
    width: "50%", // 6 columns out of 12
    borderTopWidth: 1,
    borderLeftWidth: 1,
  },
});

export const PdfDownload = ({ contract }) => {
  return (
    <Document>
      <Page style={styles.overAllStyle} size={"A4"}>
        <View style={styles.mainContainer}>
          {/* First Part */}
          <View>
            <View style={styles.header}>
              <Text style={styles.centeredText}>Contract Information</Text>
            </View>
            <View style={styles.flex_border_bottom}>
              <View style={styles.col3_border_right}>
                <Text style={styles.centeredText}>Contract Title</Text>
              </View>
              <View>
                <Text style={styles.centeredText}>
                  {contract?.generalInformation?.contract_title}
                </Text>
              </View>
            </View>
            <View style={styles.flex_border_bottom}>
              <View style={styles.col3_border_right}>
                <Text style={styles.centeredText}>Contract Number</Text>
              </View>
              <View style={styles.col3_border_right}>
                <Text style={styles.centeredText}>
                  {contract?.generalInformation?.contract_number}
                </Text>
              </View>

              <View style={styles.col3_border_right}>
                <Text style={styles.centeredText}>Contract Type</Text>
              </View>
              <View style={styles.col3_no_border_right}>
                <Text style={styles.centeredText}>
                  {contract?.generalInformation?.contract_type}
                </Text>
              </View>
            </View>
          </View>
          {/** Second Part */}
          <View>
            <View style={styles.header}>
              <Text style={styles.centeredText}>Counterparty Information</Text>
            </View>

            <View style={styles.flex_border_bottom}>
              <View style={styles.col3_border_right}>
                <Text style={styles.centeredText}>Counter party name</Text>
              </View>
              <View>
                <Text style={styles.centeredText}>
                  {contract?.counterPartyInformation?.counter_party}
                </Text>
              </View>
            </View>
            <View style={styles.flex_border_bottom}>
              <View style={styles.col3_border_right}>
                <Text style={styles.centeredText}>Phone</Text>
              </View>
              <View>
                <Text style={styles.centeredText}>
                  {contract?.counterPartyInformation?.phone}
                </Text>
              </View>
            </View>
            <View style={styles.flex_border_bottom}>
              <View style={styles.col3_border_right}>
                <Text style={styles.centeredText}>Email</Text>
              </View>
              <View>
                <Text style={styles.centeredText}>
                  {contract?.counterPartyInformation?.email}
                </Text>
              </View>
            </View>
            <View style={styles.flex_border_bottom}>
              <View style={styles.col3_border_right}>
                <Text style={styles.centeredText}>Address</Text>
              </View>
              <View>
                <Text style={styles.centeredText}>
                  {contract?.counterPartyInformation?.address}
                </Text>
              </View>
            </View>
          </View>
          {/** Second Part */}
          {/* Third Part */}
          <View>
            <View style={styles.header}>
              <Text style={styles.centeredText}>Contract life cycle type</Text>
            </View>
            <View style={styles.flex_border_bottom}>
              <View style={styles.col3_border_right}>
                <Text style={styles.centeredText}>Contract Term</Text>
              </View>
              <View>
                <Text style={styles.centeredText}>
                  {contract?.lifeCycle?.contract_term}
                </Text>
              </View>
            </View>
            <View style={styles.flex_border_bottom}>
              {/* <View className="d-flex flex-row col-9"> */}
              <View style={styles.col3_border_right}>
                <Text style={styles.centeredText}>Start Date</Text>
              </View>
              <View style={styles.col4_border_right}>
                <Text style={styles.centeredText}>
                  {contract?.generalInformation?.start_date}
                </Text>
              </View>
              {/* </View> */}
              {/* <View className="d-flex flex-row col-3 "> */}
              <View style={styles.col2_border_right}>
                <Text style={styles.centeredText}>End Date</Text>
              </View>
              <View>
                <Text style={styles.centeredText}>
                  {contract?.generalInformation?.end_date}
                </Text>
              </View>
              {/* </View> */}
            </View>
            <View style={styles.flex_border_bottom}>
              <View style={styles.col3_border_right}>
                <Text style={styles.centeredText}>Related Term</Text>
              </View>
              <View>
                <Text style={styles.centeredText}>
                  {contract?.lifeCycle?.prior_notice_term}
                </Text>
              </View>
            </View>
          </View>
          {/** Third Part */}
          {/** Fourth Part */}
          <View>
            <View style={styles.flex_border_bottom}>
              <Text style={styles.centeredText}>Amount</Text>
            </View>
            <View style={styles.flex_border_bottom}>
              <View style={styles.col6}>
                <View style={styles.col3_border_right}>
                  <Text style={styles.centeredText}>Amount</Text>
                </View>
                <View style={styles.col6_border_right}>
                  <Text style={styles.centeredText}>
                    {contract?.paymentInformation.length &&
                      contract?.paymentInformation[0]?.amount}
                  </Text>
                </View>
                <View style={styles.col3_border_right}>
                  <Text style={styles.centeredText}>Monthly</Text>
                </View>
              </View>
              <View style={styles.col6}>
                <View style={styles.col6_border_right}>
                  <Text style={styles.centeredText}>Total Contract Amount</Text>
                </View>
                <View style={styles.col6}>
                  <Text style={styles.centeredText}>
                    {contract?.paymentInformation.length &&
                      contract?.paymentInformation[0]?.total_contract_amount}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.flex_border_bottom}>
              <View style={styles.col3_border_right}>
                <Text style={styles.centeredText}>Payment Term</Text>
              </View>
              <View>
                <Text style={styles.centeredText}>
                  {contract?.paymentInformation.length &&
                    contract?.paymentInformation[0]?.payment_term}
                </Text>
              </View>
            </View>
          </View>
          {/** Fourth Part */}
          {/** Fifth Part */}
          <View>
            <View style={styles.header}>
              <Text style={styles.centeredText}>Payment Schedule</Text>
            </View>
            {/** This View will be looped */}
            <View style={styles.flex_col_border_bottom}>
              {contract?.paymentInformation.length &&
                contract?.paymentInformation.map((pi) => {
                  return (
                    <View key={pi} style={styles.flex_border_bottom}>
                      <View style={styles.col3_border_right}>
                        <Text style={styles.centeredText}>
                          {pi.payment_term || "Term A"}
                        </Text>
                      </View>
                      <View style={styles.col1_border_right}>
                        <Text style={styles.centeredText}>Date</Text>
                      </View>
                      <View style={styles.col3_border_right}>
                        <Text style={styles.centeredText}>
                          {pi.payment_date}
                        </Text>
                      </View>
                      <View style={styles.col2_border_right}>
                        <Text style={styles.centeredText}>Amount</Text>
                      </View>
                      <View style={styles.col3_no_border_right}>
                        <Text style={styles.centeredText}>{pi.amount}</Text>
                      </View>
                    </View>
                  );
                })}
            </View>
            {/** This View will be looped */}

            <View style={styles.flex_border_bottom}>
              <View style={styles.col3_border_right}>
                <Text style={styles.centeredText}>Prior Notice Term</Text>
              </View>
              <View>{contract?.lifeCycle?.prior_notice_term}</View>
            </View>
            <View style={styles.flex_border_bottom}>
              <View style={styles.col3_border_right}>
                <Text style={styles.centeredText}>Alert Date</Text>
              </View>
              <View>
                {contract?.lifeCycle?.remind_dates.length &&
                  contract?.lifeCycle?.remind_dates[0]?.date}
              </View>
            </View>
          </View>
          {/** Fifth Part */}
          {/** Sixth Part */}
          <View style={styles.sixth}>
            <View style={styles.col5_borderLT}>
              <View
                style={(styles.col3_border_right, styles.flex_border_bottom)}
              >
                <Text style={styles.centeredText}>MYT</Text>
              </View>

              <View style={styles.flex_border_bottom}>
                <Text style={styles.centeredText}>Relevant Deapartmet</Text>
              </View>
              <View style={styles.flex_border_bottom}>
                <View style={styles.col4_border_right}>
                  <Text style={styles.centeredText}>Signer</Text>
                </View>
                <View>
                  <Text style={styles.centeredText}>
                    {contract?.generalInformation?.signer_obh_myt}
                  </Text>
                </View>
              </View>
              <View style={styles.flex_border_bottom}>
                <View style={styles.col4_border_right}>
                  <Text style={styles.centeredText}>Position</Text>
                </View>
                <View>
                  <Text style={styles.centeredText}>
                    {contract?.generalInformation?.signer_position ||
                      "Manager (Example)"}
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.col6_borderLT}>
              <View style={styles.flex_border_bottom}>
                <Text style={styles.centeredText}>Counter Party</Text>
              </View>

              <View style={styles.flex_border_bottom}>
                <View>
                  <View>
                    <Text style={styles.centeredText}>
                      Signer Of Counter Party
                    </Text>
                  </View>
                </View>
                <View></View>
              </View>
              <View style={styles.flex_border_bottom}>
                <View style={styles.col3_border_right}>
                  <Text style={styles.centeredText}>Signer</Text>
                </View>
                <View>
                  <Text style={styles.centeredText}>
                    {contract?.counterPartyInformation?.signer}
                  </Text>
                </View>
              </View>
              <View style={styles.flex_border_bottom}>
                <View style={styles.col3_border_right}>
                  <Text style={styles.centeredText}>Position</Text>
                </View>
                <View>
                  <Text style={styles.centeredText}>
                    {contract?.counterPartyInformation?.position ||
                      "Assistant Manager(Example)"}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          {/** Sixth Part */}
        </View>
      </Page>
    </Document>
  );
};
