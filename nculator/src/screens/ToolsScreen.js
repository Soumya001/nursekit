import React, { useContext, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, StyleSheet, SafeAreaView } from 'react-native';
import { AppContext } from '../../App';
import { TOOLS } from '../calculators';

export default function ToolsScreen({ navigation }) {
  const { theme, addRecent } = useContext(AppContext);
  const [query, setQuery] = useState('');
  const s = styles(theme);

  const filtered = TOOLS.filter(t =>
    !query || t.name.toLowerCase().includes(query.toLowerCase()) || t.desc.toLowerCase().includes(query.toLowerCase())
  );

  const openTool = (tool) => { addRecent(tool.id); navigation.push('Tool', { tool }); };

  return (
    <SafeAreaView style={s.safe}>
      <View style={s.header}>
        <Text style={s.title}>Calculators</Text>
      </View>

      {/* SEARCH */}
      <View style={[s.searchWrap, { backgroundColor: theme.s2, borderColor: theme.border }]}>
        <Text style={[s.searchIcon, { color: theme.muted }]}>🔍</Text>
        <TextInput style={[s.searchInput, { color: theme.text }]} value={query} onChangeText={setQuery}
          placeholder="Search calculators" placeholderTextColor={theme.muted} autoCorrect={false} />
      </View>

      <ScrollView style={s.scroll} contentContainerStyle={s.content} showsVerticalScrollIndicator={false}>
        <View style={s.list}>
          {filtered.map((tool) => (
            <TouchableOpacity key={tool.id} style={[s.row, { backgroundColor: theme.s2, borderColor: `rgba(${tool.rgb},0.25)` }]}
              onPress={() => openTool(tool)} activeOpacity={0.8}>
              <View style={[s.rowIcon, { backgroundColor: `rgba(${tool.rgb},0.18)` }]}>
                <Text style={s.rowIconText}>{tool.icon}</Text>
              </View>
              <View style={s.rowText}>
                <Text style={[s.rowName, { color: theme.text }]}>{tool.name}</Text>
                <Text style={[s.rowDesc, { color: theme.muted }]}>{tool.desc}</Text>
              </View>
              {tool.danger && <View style={[s.dangerBadge, { backgroundColor: theme.dangerSoft }]}>
                <Text style={[s.dangerText, { color: theme.danger }]}>HIGH-RISK</Text>
              </View>}
              <Text style={[s.chevron, { color: theme.muted }]}>›</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = (theme) => StyleSheet.create({
  safe: { flex: 1, backgroundColor: theme.bg },
  header: { paddingHorizontal: 16, paddingTop: 8, paddingBottom: 4 },
  title: { fontSize: 28, fontWeight: '700', color: theme.text, letterSpacing: -0.5 },
  searchWrap: { flexDirection: 'row', alignItems: 'center', gap: 10, marginHorizontal: 16, marginTop: 12, marginBottom: 4, height: 52, borderRadius: 16, borderWidth: 1, paddingHorizontal: 14 },
  searchIcon: { fontSize: 16 },
  searchInput: { flex: 1, fontSize: 15, height: '100%' },
  scroll: { flex: 1 },
  content: { padding: 16, paddingTop: 12, paddingBottom: 32 },
  list: { gap: 10 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 13, padding: 15, borderRadius: 16, borderWidth: 1 },
  rowIcon: { width: 44, height: 44, borderRadius: 13, alignItems: 'center', justifyContent: 'center' },
  rowIconText: { fontSize: 20 },
  rowText: { flex: 1 },
  rowName: { fontSize: 15, fontWeight: '700', letterSpacing: -0.1 },
  rowDesc: { fontSize: 12, marginTop: 2 },
  dangerBadge: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 7 },
  dangerText: { fontSize: 10, fontWeight: '700', letterSpacing: 0.5 },
  chevron: { fontSize: 22 },
});
