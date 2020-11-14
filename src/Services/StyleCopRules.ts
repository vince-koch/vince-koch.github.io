export class StyleCopRules
{
    public static getAttributeText(rule: string)
    {
        if (StyleCopRules.spacingRules.indexOf(rule) > -1)
        {
            return `[SuppressMessage("Microsoft.StyleCop.CSharp.SpacingRules", "${rule}")]`;
        }
        else if (StyleCopRules.readabilityRules.indexOf(rule) > -1)
        {
            return `[SuppressMessage("Microsoft.StyleCop.CSharp.ReadabilityRules", "${rule}")]`;
        }
        else if (StyleCopRules.orderingRules.indexOf(rule) > -1)
        {
            return `[SuppressMessage("Microsoft.StyleCop.CSharp.OrderingRules", "${rule}")]`;
        }
        else if (StyleCopRules.namingRules.indexOf(rule) > -1)
        {
            return `[SuppressMessage("Microsoft.StyleCop.CSharp.NamingRules", "${rule}")]`;
        }
        else if (StyleCopRules.maintainabilityRules.indexOf(rule) > -1)
        {
            return `[SuppressMessage("Microsoft.StyleCop.CSharp.MaintainabilityRules", "${rule}")]`;
        }
        else if (StyleCopRules.layoutRules.indexOf(rule) > -1)
        {
            return `[SuppressMessage("Microsoft.StyleCop.CSharp.LayoutRules", "${rule}")]`;
        }
        else if (StyleCopRules.documentationRules.indexOf(rule) > -1)
        {
            return `[SuppressMessage("Microsoft.StyleCop.CSharp.DocumentationRules", "${rule}")]`;
        }
        else
        {
            return null;
        }
    }

    // Spacing Rules (SA1000-)
    // Rules which enforce spacing requirements around keywords and symbols in the code.
    // [SuppressMessage("Microsoft.StyleCop.CSharp.SpacingRules", "SA1000:KeywordsMustBeSpacedCorrectly")]
    public static spacingRules: string[] = [
        "SA1000:KeywordsMustBeSpacedCorrectly",
        "SA1001:CommasMustBeSpacedCorrectly",
        "SA1002:SemicolonsMustBeSpacedCorrectly",
        "SA1003:SymbolsMustBeSpacedCorrectly",
        "SA1004:DocumentationLinesMustBeginWithSingleSpace",
        "SA1005:SingleLineCommentsMustBeginWithSingeSpace",
        "SA1006:PreprocessorKeywordsMustNotBePrecededBySpace",
        "SA1007:OperatorKeywordMustBeFollowedBySpace",
        "SA1008:OpeningParenthesisMustBeSpacedCorrectly",
        "SA1009:ClosingParenthesisMustBeSpacedCorrectly",
        "SA1010:OpeningSquareBracketsMustBeSpacedCorrectly",
        "SA1011:ClosingSquareBracketsMustBeSpacedCorrectly",
        "SA1012:OpeningCurlyBracketsMustBeSpacedCorrectly",
        "SA1013:ClosingCurlyBracketsMustBeSpacedCorrectly",
        "SA1014:OpeningGenericBracketsMustBeSpacedCorrectly",
        "SA1015:ClosingGenericBracketsMustBeSpacedCorrectly",
        "SA1016:OpeningAttributeBracketsMustBeSpacedCorrectly",
        "SA1017:ClosingAttributeBracketsMustBeSpacedCorrectly",
        "SA1018:NullableTypeSymbolsMustNotBePrecededBySpace",
        "SA1019:MemberAccessSymbolsMustBeSpacedCorrectly",
        "SA1020:IncrementDecrementSymbolsMustBeSpacedCorrectly",
        "SA1021:NegativeSignsMustBeSpacedCorrectly",
        "SA1022:PositiveSignsMustBeSpacedCorrectly",
        "SA1023:DereferenceAndAccessOfSymbolsMustBeSpacedCorrectly",
        "SA1024:ColonsMustBeSpacedCorrectly",
        "SA1025:CodeMustNotContainMultipleWhitespaceInARow",
        "SA1026:CodeMustNotContainSpaceAfterNewKeywordInImplicitlyTypedArrayAllocation",
        "SA1027:TabsMustNotBeUsed"
    ];

    // Readability Rules (SA1100-) (Microsoft.StyleCop.CSharp.ReadabilityRules)
    // Rules which ensure that the code is well-formatted and readable.
    // [SuppressMessage("Microsoft.StyleCop.CSharp.ReadabilityRules", "SA1100:DoNotPrefixCallsWithBaseUnlessLocalImplementationExists")]
    public static readabilityRules: string[] = [
        "SA1100:DoNotPrefixCallsWithBaseUnlessLocalImplementationExists",
        "SA1101:PrefixLocalCallsWithThis",
        "SA1102:QueryClauseMustFollowPreviousClause",
        "SA1103:QueryClausesMustBeOnSeparateLinesOrAllOnOneLine",
        "SA1104:QueryClauseMustBeginOnNewLineWhenPreviousClauseSpansMultipleLines",
        "SA1105:QueryClausesSpanningMultipleLinesMustBeginOnOwnLine",
        "SA1106:CodeMustNotContainEmptyStatements",
        "SA1107:CodeMustNotContainMultipleStatementsOnOneLine",
        "SA1108:BlockStatementsMustNotContainEmbeddedComments",
        "SA1109:BlockStatementsMustNotContainEmbeddedRegions",
        "SA1110:OpeningParenthesisMustBeOnDeclarationLine",
        "SA1111:ClosingParenthesisMustBeOnLineOfOpeningParenthesis",
        "SA1112:ClosingParenthesisMustBeOnLineOfOpeningParenthesis",
        "SA1113:CommaMustBeOnSameLineAsPreviousParameter",
        "SA1114:ParameterListMustFollowDeclaration",
        "SA1115:ParameterMustFollowComma",
        "SA1116:SplitParametersMustStartOnLineAfterDeclaration",
        "SA1117:ParametersMustBeOnSameLineOrSeparateLines",
        "SA1118:ParameterMustNotSpanMultipleLines",
        "SA1120:CommentsMustContainText",
        "SA1121:UseBuiltInTypeAlias",
        "SA1122:UseStringEmptyForEmptyStrings",
        "SA1123:DoNotPlaceRegionsWithinElements",
        "SA1124:DoNotUseRegions",
        "SA1125:UseShorthandForNullableTypes"
    ];

    // Ordering Rules (SA1200-)
    // Rules which enforce a standard ordering scheme for code contents.
    // [SuppressMessage("Microsoft.StyleCop.CSharp.OrderingRules", "SA1200:UsingDirectivesMustBePlacedWithinNamespace")]
    public static orderingRules: string[] = [
        "SA1200:UsingDirectivesMustBePlacedWithinNamespace",
        "SA1201:ElementsMustAppearInTheCorrectOrder",
        "SA1202:ElementsMustBeOrderedByAccess",
        "SA1203:ConstantsMustAppearBeforeFields",
        "SA1204:StaticElementsMustAppearBeforeInstanceElements",
        "SA1205:PartialElementsMustDeclareAccess",
        "SA1206:DeclarationKeywordsMustFollowOrder",
        "SA1207:ProtectedMustComeBeforeInternal",
        "SA1208:SystemUsingDirectivesMustBePlacedBeforeOtherUsingDirectives",
        "SA1209:UsingAliasDirectivesMustBePlacedAfterOtherUsingDirectives",
        "SA1210:UsingDirectivesMustBeOrderedAlphabeticallyByNamespace",
        "SA1211:UsingAliasDirectivesMustBeOrderedAlphabeticallyByAliasName",
        "SA1212:PropertyAccessorsMustFollowOrder",
        "SA1213:EventAccessorsMustFollowOrder"
    ];

    // Naming Rules (SA1300-)
    // Rules which enforce naming requirements for members, types, and variables.
    // [SuppressMessage("Microsoft.StyleCop.CSharp.NamingRules", "SA1300:ElementMustBeginWithUpperCaseLetter")]
    public static namingRules: string[] = [
        "SA1300:ElementMustBeginWithUpperCaseLetter",
        "SA1301:ElementMustBeginWithLowerCaseLetter",
        "SA1302:InterfaceNamesMustBeginWithI",
        "SA1303:ConstFieldNamesMustBeginWithUpperCaseLetter",
        "SA1304:NonPrivateReadonlyFieldsMustBeginWithUpperCaseLetter",
        "SA1305:FieldNamesMustNotUseHungarianNotation",
        "SA1306:FieldNamesMustBeginWithLowerCaseLetter",
        "SA1307:AccessibleFieldsMustBeginWithUpperCaseLetter",
        "SA1308:VariableNamesMustNotBePrefixed",
        "SA1309:FieldNamesMustNotBeginWithUnderscore",
        "SA1310:FieldNamesMustNotContainUnderscore"        
    ];

    // Maintainability Rules (SA1400-)
    // Rules which improve code maintainability.
    // [SuppressMessage("Microsoft.StyleCop.CSharp.MaintainabilityRules", "SA1119:StatementMustNotUseUnnecessaryParenthesis")]
    public static maintainabilityRules: string[] = [
        "SA1119:StatementMustNotUseUnnecessaryParenthesis",
        "SA1400:AccessModifierMustBeDeclared",
        "SA1401:FieldsMustBePrivate",
        "SA1402:FileMayOnlyContainASingleClass",
        "SA1403:FileMayOnlyContainASingleNamespace",
        "SA1404:CodeAnalysisSuppressionMustHaveJustification",
        "SA1405:DebugAssertMustProvideMessageText",
        "SA1406:DebugFailMustProvideMessageText",
        "SA1407:ArithmeticExpressionsMustDeclarePrecedence",
        "SA1408:ConditionalExpressionsMustDeclarePrecendence",
        "SA1409:RemoveUnnecessaryCode",
        "SA1410:RemoveDelegateParenthesisWhenPossible",
        "SA1411:AttributeConstructorMustNotUseUnnecessaryParenthesis"        
    ];

    // Layout Rules (SA1500-)
    // Rules which enforce code layout and line spacing.
    // [SuppressMessage("Microsoft.StyleCop.CSharp.LayoutRules", "SA1500:CurlyBracketsForMultiLineStatementsMustNotShareLine")]
    public static layoutRules: string[] = [
        "SA1500:CurlyBracketsForMultiLineStatementsMustNotShareLine",
        "SA1501:StatementMustNotBeOnSingleLine",
        "SA1502:ElementMustNotBeOnSingleLine",
        "SA1503:CurlyBracketsMustNotBeOmitted",
        "SA1504:AllAccessorMustBeMultiLineOrSingleLine",
        "SA1505:OpeningCurlyBracketsMustNotBeFollowedByBlankLine",
        "SA1506:ElementDocumentationHeadersMustNotBeFollowedByBlankLine",
        "SA1507:CodeMustNotContainMultipleBlankLinesInARow",
        "SA1508:ClosingCurlyBracketsMustNotBePrecededByBlankLine",
        "SA1509:OpeningCurlyBracketsMustNotBePrecedededByBlankLine",
        "SA1510:ChainedStatementBlocksMustNotBePrecededByBlankLine",
        "SA1511:WhileDoFooterMustNotBePrecededByBlankLine",
        "SA1512:SingleLineCommentsMustNotBeFollowedByBlankLine",
        "SA1513:ClosingCurlyBracketMustBeFollowedByBlankLine",
        "SA1514:ElementDocumentationHeaderMustBePrecededByBlankLine",
        "SA1515:SingleLineCommentMustBePrecededByBlankLine",
        "SA1516:ElementsMustBeSeparatedByBlankLine",
        "SA1517:CodeMustNotContainBlankLinesAtStartOfFile",
        "SA1518:CodeMustNotContainBlankLinesAtEndOfFile"
    ];

    // Documentation Rules (SA1600-)
    // Rules which verify the content and formatting of code documentation.
    // [SuppressMessage("Microsoft.StyleCop.CSharp.DocumentationRules", "SA1600:ElementsMustBeDocumented")]
    public static documentationRules: string[] = [
        "SA1600:ElementsMustBeDocumented",
        "SA1601:PartialElementsMustBeDocumented",
        "SA1602:EnumerationItemsMustBeDocumented",
        "SA1603:DocumentationMustContainValidXml",
        "SA1604:ElementDocumentationMustHaveSummary",
        "SA1605:PartialElementDocumentationMustHaveSummary",
        "SA1606:ElementDocumentationMustHaveSummaryText",
        "SA1607:PartialElementDocumentationMustHaveSummaryText",
        "SA1608:ElementDocumentationMustNotHaveDefaultSummary",
        "SA1609:PropertyDocumentationMustHaveValue",
        "SA1610:PropertyDocumentationMustHaveValueText",
        "SA1611:ElementParametersMustBeDocumented",
        "SA1612:ElementParameterDocumentationMustMatchElementParameters",
        "SA1613:ElementParameterDocumentationMustDeclareParameterName",
        "SA1614:ElementParameterDocumentationMustHaveText",
        "SA1615:ElementReturnValueMustBeDocumented",
        "SA1616:ElementReturnValueDocumentationMustHaveValue",
        "SA1617:VoidReturnValueMustNotBeDocumented",
        "SA1618:GenericTypeParametersMustBeDocumented",
        "SA1619:GenericTypeParametersMustBeDocumentedPartialClass",
        "SA1620:GenericTypeParameterDocumentationMustMatchTypeParameters",
        "SA1621:GenericTypeParameterDocumentationMustDeclareParameterName",
        "SA1622:GenericTypeParameterDocumentationMustHaveText",
        "SA1623:PropertySummaryDocumentationMustMatchAccessors",
        "SA1624:PropertySummaryDocumentationMustOmitSetAccessorWithRestricedAccess",
        "SA1625:ElementDocumentationMustNotBeCopiedAndPasted",
        "SA1626:SingleLineCommentsMustNotUseDocumentationStyleSlashes",
        "SA1627:DocumentationTextMustNotBeEmpty",
        "SA1628:DocumentationTextMustBeginWithACapitalLetter",
        "SA1629:DocumentationTextMustEndWithAPeriod",
        "SA1630:DocumentationTextMustContainWhitespace",
        "SA1631:DocumentationTextMustMeetCharacterPercentage",
        "SA1632:DocumentationTextMustMeetMinimumCharacterLength",
        "SA1633:FileMustHaveHeader",
        "SA1634:FileHeaderMustShowCopyright",
        "SA1635:FileHeaderMustHaveCopyrightText",
        "SA1636:FileHeaderCopyrightTextMustMatch",
        "SA1637:FileHeaderMustContainFileName",
        "SA1638:FileHeaderFileNameDocumentationMustMatchFileName",
        "SA1639:FileHeaderMustHaveSummary",
        "SA1640:FileHeaderMustHaveValidCompanyText",
        "SA1641:FileHeaderCompanyNameTextMustMatch",
        "SA1642:ConstructorSummaryDocumentationMustBeginWithStandardText",
        "SA1643:DestructorSummaryDocumentationMustBeginWithStandardText",
        "SA1644:DocumentationHeadersMustNotContainBlankLines",
        "SA1645:IncludedDocumentationFileDoesNotExist",
        "SA1646:IncludedDocumentationXPathDoesNotExist",
        "SA1647:IncludeNodeDoesNotContainValidFileAndPath",
        "SA1648:InheritDocMustBeUsedWithInheritingClass",
        "SA1649:FileHeaderFileNameDocumentationMustMatchTypeName",
        "SA1650:ElementDocumentationMustBeSpelledCorrectly"
    ];

    public static allRules: string[] = [
        ...StyleCopRules.spacingRules,
        ...StyleCopRules.readabilityRules,
        ...StyleCopRules.orderingRules,
        ...StyleCopRules.namingRules,
        ...StyleCopRules.maintainabilityRules,
        ...StyleCopRules.layoutRules,
        ...StyleCopRules.documentationRules
    ];
}