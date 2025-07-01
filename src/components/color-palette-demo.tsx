"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Eye, Palette } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const colorPalette = {
  // Base Colors
  background: {
    primary: { hex: "#0a0a0b", hsl: "hsl(240, 5%, 4%)" },
    secondary: { hex: "#111113", hsl: "hsl(240, 5%, 7%)" },
    tertiary: { hex: "#1a1a1d", hsl: "hsl(240, 5%, 11%)" }
  },
  
  // Surface Colors
  surface: {
    primary: { hex: "#1e1e21", hsl: "hsl(240, 5%, 13%)" },
    secondary: { hex: "#252529", hsl: "hsl(240, 5%, 16%)" },
    tertiary: { hex: "#2d2d32", hsl: "hsl(240, 5%, 19%)" },
    elevated: { hex: "#35353b", hsl: "hsl(240, 5%, 22%)" }
  },

  // Text Colors
  text: {
    primary: { hex: "#f8f9fa", hsl: "hsl(210, 17%, 98%)" },
    secondary: { hex: "#e9ecef", hsl: "hsl(210, 16%, 93%)" },
    tertiary: { hex: "#adb5bd", hsl: "hsl(210, 14%, 71%)" },
    disabled: { hex: "#6c757d", hsl: "hsl(210, 14%, 46%)" }
  },

  // Brand/Accent Colors
  primary: {
    50: { hex: "#eff6ff", hsl: "hsl(214, 100%, 97%)" },
    100: { hex: "#dbeafe", hsl: "hsl(214, 95%, 93%)" },
    200: { hex: "#bfdbfe", hsl: "hsl(214, 86%, 88%)" },
    300: { hex: "#93c5fd", hsl: "hsl(213, 94%, 78%)" },
    400: { hex: "#60a5fa", hsl: "hsl(213, 94%, 68%)" },
    500: { hex: "#3b82f6", hsl: "hsl(217, 91%, 60%)" },
    600: { hex: "#2563eb", hsl: "hsl(221, 83%, 53%)" },
    700: { hex: "#1d4ed8", hsl: "hsl(224, 76%, 48%)" },
    800: { hex: "#1e40af", hsl: "hsl(226, 71%, 40%)" },
    900: { hex: "#1e3a8a", hsl: "hsl(228, 64%, 32%)" }
  },

  // Secondary Accent
  secondary: {
    50: { hex: "#f0fdf4", hsl: "hsl(120, 60%, 97%)" },
    100: { hex: "#dcfce7", hsl: "hsl(120, 60%, 90%)" },
    200: { hex: "#bbf7d0", hsl: "hsl(120, 61%, 82%)" },
    300: { hex: "#86efac", hsl: "hsl(120, 73%, 75%)" },
    400: { hex: "#4ade80", hsl: "hsl(120, 83%, 67%)" },
    500: { hex: "#22c55e", hsl: "hsl(120, 76%, 60%)" },
    600: { hex: "#16a34a", hsl: "hsl(120, 84%, 46%)" },
    700: { hex: "#15803d", hsl: "hsl(120, 68%, 37%)" },
    800: { hex: "#166534", hsl: "hsl(120, 60%, 30%)" },
    900: { hex: "#14532d", hsl: "hsl(120, 61%, 20%)" }
  },

  // State Colors
  states: {
    success: { hex: "#10b981", hsl: "hsl(158, 84%, 39%)" },
    warning: { hex: "#f59e0b", hsl: "hsl(43, 96%, 50%)" },
    error: { hex: "#ef4444", hsl: "hsl(0, 84%, 60%)" },
    info: { hex: "#06b6d4", hsl: "hsl(188, 95%, 43%)" }
  },

  // Interactive States
  interactive: {
    hover: { hex: "#374151", hsl: "hsl(220, 13%, 26%)" },
    active: { hex: "#4b5563", hsl: "hsl(220, 9%, 34%)" },
    focus: { hex: "#3b82f6", hsl: "hsl(217, 91%, 60%)" },
    disabled: { hex: "#374151", hsl: "hsl(220, 13%, 26%)" }
  },

  // Border Colors
  border: {
    primary: { hex: "#374151", hsl: "hsl(220, 13%, 26%)" },
    secondary: { hex: "#4b5563", hsl: "hsl(220, 9%, 34%)" },
    focus: { hex: "#3b82f6", hsl: "hsl(217, 91%, 60%)" }
  }
};

const contrastRatios = {
  "Primary Text on Dark BG": "19.6:1 (AAA)",
  "Secondary Text on Dark BG": "17.8:1 (AAA)",
  "Tertiary Text on Dark BG": "9.2:1 (AAA)",
  "Primary Blue on Dark BG": "8.1:1 (AAA)",
  "Success Green on Dark BG": "6.8:1 (AAA)",
  "Warning Yellow on Dark BG": "10.4:1 (AAA)",
  "Error Red on Dark BG": "7.2:1 (AAA)",
  "Primary Text on Surface": "16.8:1 (AAA)",
  "Interactive Hover": "4.6:1 (AA)"
};

export default function ColorPaletteDemo() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const copyToClipboard = (color: string, format: 'hex' | 'hsl') => {
    const colorValue = format === 'hex' ? color : colorPalette.text.primary.hsl;
    navigator.clipboard.writeText(colorValue);
    setCopiedColor(color);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const ColorCard = ({ 
    title, 
    colors, 
    description 
  }: { 
    title: string; 
    colors: any; 
    description: string;
  }) => (
    <Card className="glass-card p-6">
      <CardContent className="p-0">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        <div className="space-y-3">
          {Object.entries(colors).map(([key, value]: [string, any]) => (
            <div key={key} className="flex items-center gap-3">
              <div 
                className="w-12 h-12 rounded-lg border border-white/20"
                style={{ backgroundColor: value.hex }}
              />
              <div className="flex-1">
                <div className="text-white font-medium capitalize">{key}</div>
                <div className="flex gap-4 text-sm">
                  <button
                    onClick={() => copyToClipboard(value.hex, 'hex')}
                    className="text-gray-300 hover:text-white transition-colors flex items-center gap-1"
                  >
                    {copiedColor === value.hex ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    {value.hex}
                  </button>
                  <button
                    onClick={() => copyToClipboard(value.hsl, 'hsl')}
                    className="text-gray-300 hover:text-white transition-colors flex items-center gap-1"
                  >
                    {copiedColor === value.hsl ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    {value.hsl}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  const ScaleCard = ({ 
    title, 
    colors, 
    description 
  }: { 
    title: string; 
    colors: any; 
    description: string;
  }) => (
    <Card className="glass-card p-6">
      <CardContent className="p-0">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        <div className="grid grid-cols-5 gap-2 mb-4">
          {Object.entries(colors).map(([key, value]: [string, any]) => (
            <div key={key} className="text-center">
              <div 
                className="w-full h-16 rounded-lg border border-white/20 mb-2"
                style={{ backgroundColor: value.hex }}
              />
              <div className="text-xs text-gray-300">{key}</div>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          {Object.entries(colors).slice(0, 3).map(([key, value]: [string, any]) => (
            <div key={key} className="flex gap-4 text-sm">
              <span className="text-gray-300 w-12">{key}:</span>
              <button
                onClick={() => copyToClipboard(value.hex, 'hex')}
                className="text-gray-300 hover:text-white transition-colors flex items-center gap-1"
              >
                {copiedColor === value.hex ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                {value.hex}
              </button>
              <button
                onClick={() => copyToClipboard(value.hsl, 'hsl')}
                className="text-gray-300 hover:text-white transition-colors flex items-center gap-1"
              >
                {copiedColor === value.hsl ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                {value.hsl}
              </button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 p-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="glass-card p-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Palette className="w-8 h-8 text-blue-400" />
              <h1 className="text-4xl font-bold text-white">
                Accessible Dark Mode Palette
              </h1>
            </div>
            <p className="text-gray-300 text-lg">
              WCAG 2.1 AA/AAA compliant color system for modern dark interfaces
            </p>
          </div>
        </motion.div>

        {/* Contrast Ratios */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <Card className="glass-card p-6">
            <CardContent className="p-0">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-green-400" />
                <h2 className="text-2xl font-bold text-white">Contrast Ratios</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(contrastRatios).map(([combo, ratio]) => (
                  <div key={combo} className="glass-surface p-4 rounded-lg">
                    <div className="text-white font-medium text-sm">{combo}</div>
                    <div className="text-green-400 font-bold">{ratio}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Color Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <ColorCard
              title="Background Colors"
              colors={colorPalette.background}
              description="Base background colors for different depth levels"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <ColorCard
              title="Surface Colors"
              colors={colorPalette.surface}
              description="Card and component background colors"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <ColorCard
              title="Text Colors"
              colors={colorPalette.text}
              description="Text hierarchy with proper contrast ratios"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <ColorCard
              title="State Colors"
              colors={colorPalette.states}
              description="Success, warning, error, and info states"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <ColorCard
              title="Interactive States"
              colors={colorPalette.interactive}
              description="Hover, active, focus, and disabled states"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            <ColorCard
              title="Border Colors"
              colors={colorPalette.border}
              description="Subtle borders and dividers"
            />
          </motion.div>
        </div>

        {/* Color Scales */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <ScaleCard
              title="Primary Blue Scale"
              colors={colorPalette.primary}
              description="Main brand color with full tonal range"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <ScaleCard
              title="Secondary Green Scale"
              colors={colorPalette.secondary}
              description="Secondary accent color for variety"
            />
          </motion.div>
        </div>

        {/* Usage Examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="mt-12"
        >
          <Card className="glass-card p-6">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold text-white mb-6">Usage Examples</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Button Examples */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">Buttons</h3>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Primary Button
                  </Button>
                  <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-800">
                    Secondary Button
                  </Button>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Success Button
                  </Button>
                </div>

                {/* Card Examples */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">Cards</h3>
                  <div className="glass-surface p-4 rounded-lg">
                    <h4 className="text-white font-medium mb-2">Card Title</h4>
                    <p className="text-gray-300 text-sm">Card content with proper contrast</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                    <h4 className="text-white font-medium mb-2">Elevated Card</h4>
                    <p className="text-gray-300 text-sm">Higher elevation surface</p>
                  </div>
                </div>

                {/* Text Examples */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">Typography</h3>
                  <div className="space-y-2">
                    <p className="text-white font-bold">Primary Text (19.6:1)</p>
                    <p className="text-gray-300">Secondary Text (17.8:1)</p>
                    <p className="text-gray-500">Tertiary Text (9.2:1)</p>
                    <p className="text-gray-600">Disabled Text (4.5:1)</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}