// React libs
import React, { FC } from 'react';
import { Document, Image, Page, Text, View } from '@react-pdf/renderer';
// Types
import * as Types from './PdfDocument.type';

const PdfDocument: FC<Types.IProps> = ({ content, title }) => {
  const styles = {
    section: { padding: 8 },
  };
  return (
    <Document>
      <Page size='A4' orientation='landscape'>
        <View
          style={[
            styles.section,
            {
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            },
          ]}
        >
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              width: '33%',
            }}
          >
            <Image
              src={`${process.env.PUBLIC_URL}/logo192.png`}
              style={{ height: 30, width: 30 }}
            />
            <Text style={{ marginLeft: 4 }}>MIA</Text>
          </View>
          <View>
            <Text>{title || ''}</Text>
          </View>
          <View style={{ width: '33%' }} />
        </View>
        <View style={styles.section}>{content}</View>
      </Page>
    </Document>
  );
};

export default PdfDocument;
